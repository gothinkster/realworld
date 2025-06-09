#!/usr/bin/env python3
"""
RealWorld API Implementation - Single File Server
THIS IS PROBABLY NOT THE PROJECT YOU ARE LOOKING FOR
This is opposite of the whole Django Ninja project: this is a 1 file in-memory no framework version
No external dependencies beyond Python standard library
Vibe coded with Claude Code, could be used as a demo backend in the long term
"""

import hashlib
import json
import re
import time
from collections import defaultdict
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, HTTPServer
from typing import Dict, Optional
from urllib.parse import parse_qs, urlparse


class InMemoryStorage:
    """In-memory storage for all data"""

    def __init__(self):
        self.users: Dict[int, Dict] = {}
        self.articles: Dict[int, Dict] = {}
        self.comments: Dict[int, Dict] = {}
        self.tags: set = set()
        self.follows: Dict[int, set] = {}  # user_id -> set of followed user_ids
        self.favorites: Dict[int, set] = {}  # user_id -> set of favorited article_ids

        # Counters for auto-incrementing IDs
        self.user_id_counter = 1
        self.article_id_counter = 1
        self.comment_id_counter = 1


class StorageContainer:
    """Long term, this should rate limit through additional data structs, and remove least used ip"""

    storage_containers = defaultdict(InMemoryStorage)

    @classmethod
    def get_storage(cls, identifier):
        return cls.storage_containers[identifier]


def generate_slug(title: str) -> str:
    """Generate URL-friendly slug from title"""
    slug = re.sub(r"[^\w\s-]", "", title.lower())
    slug = re.sub(r"[-\s]+", "-", slug)
    return slug.strip("-")


def hash_password(password: str) -> str:
    """Simple password hashing"""
    return hashlib.sha256(password.encode()).hexdigest()


def generate_token(user_id: int) -> str:
    """Generate JWT-like token (simplified)"""
    payload = f"{user_id}:{int(time.time())}"
    return f"token_{hashlib.sha256(payload.encode()).hexdigest()[:32]}"


def verify_token(token: str, storage: InMemoryStorage) -> Optional[int]:
    """Verify token and return user_id if valid"""
    if not token or not token.startswith("token_"):
        return None

    # In a real implementation, you'd decode the JWT
    # For simplicity, we'll store token->user_id mapping
    for user_id, user in storage.users.items():
        if user.get("token") == token:
            return user_id
    return None


def get_user_by_email(email: str, storage: InMemoryStorage) -> Optional[Dict]:
    """Find user by email"""
    for user in storage.users.values():
        if user["email"] == email:
            return user
    return None


def get_user_by_username(username: str, storage: InMemoryStorage) -> Optional[Dict]:
    """Find user by username"""
    for user in storage.users.values():
        if user["username"] == username:
            return user
    return None


def get_article_by_slug(slug: str, storage: InMemoryStorage) -> Optional[Dict]:
    """Find article by slug"""
    for article in storage.articles.values():
        if article["slug"] == slug:
            return article
    return None


def format_datetime(dt: datetime) -> str:
    """Format datetime to ISO 8601"""
    return dt.strftime("%Y-%m-%dT%H:%M:%S.%f")[:-3] + "Z"


def get_current_time() -> str:
    """Get current time in ISO format"""
    return format_datetime(datetime.now(timezone.utc))


def create_user_response(user: Dict, include_token: bool = True) -> Dict:
    """Create user response format"""
    response = {
        "username": user["username"],
        "email": user["email"],
        "bio": user.get("bio", ""),
        "image": user.get("image", "https://api.realworld.io/images/smiley-cyrus.jpeg"),
    }
    if include_token:
        response["token"] = user.get("token", "")
    return response


def create_profile_response(user: Dict, storage: InMemoryStorage, current_user_id: Optional[int] = None) -> Dict:
    """Create profile response format"""
    following = False
    if current_user_id:
        following = user["id"] in storage.follows.get(current_user_id, set())

    return {
        "username": user["username"],
        "bio": user.get("bio", ""),
        "image": user.get("image", "https://api.realworld.io/images/smiley-cyrus.jpeg"),
        "following": following,
    }


def create_article_response(article: Dict, storage: InMemoryStorage, current_user_id: Optional[int] = None) -> Dict:
    """Create article response format"""
    author = storage.users[article["author_id"]]
    favorited = False
    if current_user_id:
        favorited = article["id"] in storage.favorites.get(current_user_id, set())

    favorites_count = sum(1 for favs in storage.favorites.values() if article["id"] in favs)

    return {
        "slug": article["slug"],
        "title": article["title"],
        "description": article["description"],
        "body": article["body"],
        "tagList": sorted(article["tagList"]),
        "createdAt": article["createdAt"],
        "updatedAt": article["updatedAt"],
        "favorited": favorited,
        "favoritesCount": favorites_count,
        "author": create_profile_response(author, storage, current_user_id),
    }


def create_comment_response(comment: Dict, storage: InMemoryStorage, current_user_id: Optional[int] = None) -> Dict:
    """Create comment response format"""
    author = storage.users[comment["author_id"]]

    return {
        "id": comment["id"],
        "createdAt": comment["createdAt"],
        "updatedAt": comment["updatedAt"],
        "body": comment["body"],
        "author": create_profile_response(author, storage, current_user_id),
    }


class RealWorldHandler(BaseHTTPRequestHandler):
    """HTTP request handler for RealWorld API"""

    def do_GET(self):
        """Handle GET requests"""
        try:
            self._handle_request("GET")
        except Exception as e:
            self._send_error(500, {"errors": {"body": [str(e)]}})

    def do_POST(self):
        """Handle POST requests"""
        try:
            self._handle_request("POST")
        except Exception as e:
            self._send_error(500, {"errors": {"body": [str(e)]}})

    def do_PUT(self):
        """Handle PUT requests"""
        try:
            self._handle_request("PUT")
        except Exception as e:
            self._send_error(500, {"errors": {"body": [str(e)]}})

    def do_DELETE(self):
        """Handle DELETE requests"""
        try:
            self._handle_request("DELETE")
        except Exception as e:
            self._send_error(500, {"errors": {"body": [str(e)]}})

    def _handle_request(self, method: str):
        """Route request to appropriate handler"""
        storage = StorageContainer.get_storage(self.request.getpeername()[0])  # ip address of client
        parsed = urlparse(self.path)
        path = parsed.path
        query_params = parse_qs(parsed.query)

        # Remove leading slash and split path
        path_parts = path.strip("/").split("/")

        # Get authorization header
        auth_header = self.headers.get("Authorization", "")
        token = auth_header.replace("Token ", "") if auth_header.startswith("Token ") else None
        current_user_id = verify_token(token, storage) if token else None

        # Route to handlers
        if method == "POST" and path == "/users":
            self._handle_register(storage)
        elif method == "POST" and path == "/users/login":
            self._handle_login(storage)
        elif method == "GET" and path == "/user":
            self._handle_get_current_user(storage, current_user_id)
        elif method == "PUT" and path == "/user":
            self._handle_update_user(storage, current_user_id)
        elif method == "GET" and path_parts[0] == "profiles" and len(path_parts) == 2:
            self._handle_get_profile(storage, path_parts[1], current_user_id)
        elif method == "POST" and len(path_parts) == 3 and path_parts[0] == "profiles" and path_parts[2] == "follow":
            self._handle_follow_user(storage, path_parts[1], current_user_id)
        elif method == "DELETE" and len(path_parts) == 3 and path_parts[0] == "profiles" and path_parts[2] == "follow":
            self._handle_unfollow_user(storage, path_parts[1], current_user_id)
        elif method == "GET" and path == "/articles":
            self._handle_list_articles(storage, query_params, current_user_id)
        elif method == "GET" and path == "/articles/feed":
            self._handle_articles_feed(storage, query_params, current_user_id)
        elif method == "POST" and path == "/articles":
            self._handle_create_article(storage, current_user_id)
        elif method == "GET" and len(path_parts) == 2 and path_parts[0] == "articles":
            self._handle_get_article(storage, path_parts[1], current_user_id)
        elif method == "PUT" and len(path_parts) == 2 and path_parts[0] == "articles":
            self._handle_update_article(storage, path_parts[1], current_user_id)
        elif method == "DELETE" and len(path_parts) == 2 and path_parts[0] == "articles":
            self._handle_delete_article(storage, path_parts[1], current_user_id)
        elif method == "POST" and len(path_parts) == 3 and path_parts[0] == "articles" and path_parts[2] == "favorite":
            self._handle_favorite_article(storage, path_parts[1], current_user_id)
        elif (
            method == "DELETE" and len(path_parts) == 3 and path_parts[0] == "articles" and path_parts[2] == "favorite"
        ):
            self._handle_unfavorite_article(storage, path_parts[1], current_user_id)
        elif method == "GET" and len(path_parts) == 3 and path_parts[0] == "articles" and path_parts[2] == "comments":
            self._handle_get_comments(storage, path_parts[1], current_user_id)
        elif method == "POST" and len(path_parts) == 3 and path_parts[0] == "articles" and path_parts[2] == "comments":
            self._handle_create_comment(storage, path_parts[1], current_user_id)
        elif (
            method == "DELETE" and len(path_parts) == 4 and path_parts[0] == "articles" and path_parts[2] == "comments"
        ):
            self._handle_delete_comment(storage, path_parts[1], int(path_parts[3]), current_user_id)
        elif method == "GET" and path == "/tags":
            self._handle_get_tags(storage)
        else:
            self._send_error(404, {"errors": {"body": ["Not found"]}})

    def _get_request_body(self) -> Dict:
        """Parse JSON request body"""
        content_length = int(self.headers.get("Content-Length", 0))
        if content_length == 0:
            return {}

        body = self.rfile.read(content_length).decode("utf-8")
        return json.loads(body) if body else {}

    def _send_response(self, status_code: int, data: Dict):
        """Send JSON response"""
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()

        response_body = json.dumps(data, indent=2)
        self.wfile.write(response_body.encode("utf-8"))

    def _send_error(self, status_code: int, error_data: Dict):
        """Send error response"""
        self._send_response(status_code, error_data)

    def _require_auth(self, current_user_id: Optional[int]) -> int:
        """Require authentication, return user_id or raise error"""
        if current_user_id is None:
            self._send_error(401, {"errors": {"body": ["Unauthorized"]}})
            raise Exception("Unauthorized")
        return current_user_id

    # Auth endpoints
    def _handle_register(self, storage: InMemoryStorage):
        """POST /users - Register new user"""
        data = self._get_request_body()
        user_data = data.get("user", {})

        email = user_data.get("email")
        username = user_data.get("username")
        password = user_data.get("password")

        if not all([email, username, password]):
            self._send_error(422, {"errors": {"body": ["Email, username and password are required"]}})
            return

        # Check if user already exists
        if get_user_by_email(email, storage) or get_user_by_username(username, storage):
            self._send_error(409, {"errors": {"body": ["User already exists"]}})
            return

        # Create new user
        user_id = storage.user_id_counter
        storage.user_id_counter += 1

        token = generate_token(user_id)
        user = {
            "id": user_id,
            "email": email,
            "username": username,
            "password": hash_password(password),
            "bio": "",
            "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
            "token": token,
            "createdAt": get_current_time(),
        }

        storage.users[user_id] = user
        storage.follows[user_id] = set()
        storage.favorites[user_id] = set()

        self._send_response(201, {"user": create_user_response(user)})

    def _handle_login(self, storage: InMemoryStorage):
        """POST /users/login - Login user"""
        data = self._get_request_body()
        user_data = data.get("user", {})

        email = user_data.get("email")
        password = user_data.get("password")

        if not all([email, password]):
            self._send_error(422, {"errors": {"body": ["Email and password are required"]}})
            return

        user = get_user_by_email(email, storage)
        if not user or user["password"] != hash_password(password):
            self._send_error(401, {"errors": {"body": ["Invalid credentials"]}})
            return

        # Generate new token
        token = generate_token(user["id"])
        user["token"] = token

        self._send_response(200, {"user": create_user_response(user)})

    def _handle_get_current_user(self, storage: InMemoryStorage, current_user_id: Optional[int]):
        """GET /user - Get current user"""
        user_id = self._require_auth(current_user_id)
        user = storage.users[user_id]
        self._send_response(200, {"user": create_user_response(user)})

    def _handle_update_user(self, storage: InMemoryStorage, current_user_id: Optional[int]):
        """PUT /user - Update current user"""
        user_id = self._require_auth(current_user_id)
        user = storage.users[user_id]

        data = self._get_request_body()
        user_data = data.get("user", {})

        # Update fields if provided
        if "email" in user_data:
            user["email"] = user_data["email"]
        if "username" in user_data:
            user["username"] = user_data["username"]
        if "password" in user_data:
            user["password"] = hash_password(user_data["password"])
        if "bio" in user_data:
            user["bio"] = user_data["bio"]
        if "image" in user_data:
            user["image"] = user_data["image"]

        self._send_response(200, {"user": create_user_response(user)})

    # Profile endpoints
    def _handle_get_profile(self, storage: InMemoryStorage, username: str, current_user_id: Optional[int]):
        """GET /profiles/{username} - Get profile"""
        user = get_user_by_username(username, storage)
        if not user:
            self._send_error(404, {"errors": {"body": ["Profile not found"]}})
            return

        self._send_response(200, {"profile": create_profile_response(user, storage, current_user_id)})

    def _handle_follow_user(self, storage: InMemoryStorage, username: str, current_user_id: Optional[int]):
        """POST /profiles/{username}/follow - Follow user"""
        user_id = self._require_auth(current_user_id)

        target_user = get_user_by_username(username, storage)
        if not target_user:
            self._send_error(404, {"errors": {"body": ["Profile not found"]}})
            return

        if target_user["id"] == user_id:
            self._send_error(422, {"errors": {"body": ["Cannot follow yourself"]}})
            return

        storage.follows[user_id].add(target_user["id"])
        self._send_response(200, {"profile": create_profile_response(target_user, storage, user_id)})

    def _handle_unfollow_user(self, storage: InMemoryStorage, username: str, current_user_id: Optional[int]):
        """DELETE /profiles/{username}/follow - Unfollow user"""
        user_id = self._require_auth(current_user_id)

        target_user = get_user_by_username(username, storage)
        if not target_user:
            self._send_error(404, {"errors": {"body": ["Profile not found"]}})
            return

        storage.follows[user_id].discard(target_user["id"])
        self._send_response(200, {"profile": create_profile_response(target_user, storage, user_id)})

    # Article endpoints
    def _handle_list_articles(self, storage: InMemoryStorage, query_params: Dict, current_user_id: Optional[int]):
        """GET /articles - List articles"""
        tag = query_params.get("tag", [None])[0]
        author = query_params.get("author", [None])[0]
        favorited = query_params.get("favorited", [None])[0]
        limit = int(query_params.get("limit", [20])[0])
        offset = int(query_params.get("offset", [0])[0])

        articles = list(storage.articles.values())

        # Filter by tag
        if tag:
            articles = [a for a in articles if tag in a["tagList"]]

        # Filter by author
        if author:
            author_user = get_user_by_username(author, storage)
            if author_user:
                articles = [a for a in articles if a["author_id"] == author_user["id"]]
            else:
                articles = []

        # Filter by favorited
        if favorited:
            favorited_user = get_user_by_username(favorited, storage)
            if favorited_user:
                favorited_article_ids = storage.favorites.get(favorited_user["id"], set())
                articles = [a for a in articles if a["id"] in favorited_article_ids]
            else:
                articles = []

        # Sort by creation date (newest first)
        articles.sort(key=lambda x: x["createdAt"], reverse=True)

        # Apply pagination
        total_count = len(articles)
        articles = articles[offset : offset + limit]

        # Format response
        article_responses = [create_article_response(a, storage, current_user_id) for a in articles]

        self._send_response(200, {"articles": article_responses, "articlesCount": total_count})

    def _handle_articles_feed(self, storage: InMemoryStorage, query_params: Dict, current_user_id: Optional[int]):
        """GET /articles/feed - Get feed of followed users"""
        user_id = self._require_auth(current_user_id)

        limit = int(query_params.get("limit", [20])[0])
        offset = int(query_params.get("offset", [0])[0])

        followed_user_ids = storage.follows.get(user_id, set())
        articles = [a for a in storage.articles.values() if a["author_id"] in followed_user_ids]

        # Sort by creation date (newest first)
        articles.sort(key=lambda x: x["createdAt"], reverse=True)

        # Apply pagination
        total_count = len(articles)
        articles = articles[offset : offset + limit]

        # Format response
        article_responses = [create_article_response(a, storage, current_user_id) for a in articles]

        self._send_response(200, {"articles": article_responses, "articlesCount": total_count})

    def _handle_create_article(self, storage: InMemoryStorage, current_user_id: Optional[int]):
        """POST /articles - Create article"""
        user_id = self._require_auth(current_user_id)

        data = self._get_request_body()
        article_data = data.get("article", {})

        title = article_data.get("title")
        description = article_data.get("description")
        body = article_data.get("body")
        tag_list = article_data.get("tagList", [])

        if not all([title, description, body]):
            self._send_error(422, {"errors": {"body": ["Title, description and body are required"]}})
            return

        # Generate slug
        slug = generate_slug(title)

        # Ensure slug is unique
        base_slug = slug
        counter = 1
        while get_article_by_slug(slug, storage):
            slug = f"{base_slug}-{counter}"
            counter += 1

        # Create article
        article_id = storage.article_id_counter
        storage.article_id_counter += 1

        current_time = get_current_time()
        article = {
            "id": article_id,
            "slug": slug,
            "title": title,
            "description": description,
            "body": body,
            "tagList": sorted(tag_list),
            "author_id": user_id,
            "createdAt": current_time,
            "updatedAt": current_time,
        }

        storage.articles[article_id] = article

        # Add tags to global tag set
        for tag in tag_list:
            storage.tags.add(tag)

        self._send_response(201, {"article": create_article_response(article, storage, user_id)})

    def _handle_get_article(self, storage: InMemoryStorage, slug: str, current_user_id: Optional[int]):
        """GET /articles/{slug} - Get article"""
        article = get_article_by_slug(slug, storage)
        if not article:
            self._send_error(404, {"errors": {"body": ["Article not found"]}})
            return

        self._send_response(200, {"article": create_article_response(article, storage, current_user_id)})

    def _handle_update_article(self, storage: InMemoryStorage, slug: str, current_user_id: Optional[int]):
        """PUT /articles/{slug} - Update article"""
        user_id = self._require_auth(current_user_id)

        article = get_article_by_slug(slug, storage)
        if not article:
            self._send_error(404, {"errors": {"body": ["Article not found"]}})
            return

        if article["author_id"] != user_id:
            self._send_error(403, {"errors": {"body": ["Forbidden"]}})
            return

        data = self._get_request_body()
        article_data = data.get("article", {})

        # Update fields if provided
        if "title" in article_data:
            article["title"] = article_data["title"]
            article["slug"] = generate_slug(article_data["title"])
        if "description" in article_data:
            article["description"] = article_data["description"]
        if "body" in article_data:
            article["body"] = article_data["body"]

        article["updatedAt"] = get_current_time()

        self._send_response(200, {"article": create_article_response(article, storage, user_id)})

    def _handle_delete_article(self, storage: InMemoryStorage, slug: str, current_user_id: Optional[int]):
        """DELETE /articles/{slug} - Delete article"""
        user_id = self._require_auth(current_user_id)

        article = get_article_by_slug(slug, storage)
        if not article:
            self._send_error(404, {"errors": {"body": ["Article not found"]}})
            return

        if article["author_id"] != user_id:
            self._send_error(403, {"errors": {"body": ["Forbidden"]}})
            return

        # Delete article and related data
        article_id = article["id"]
        del storage.articles[article_id]

        # Remove from favorites
        for user_favorites in storage.favorites.values():
            user_favorites.discard(article_id)

        # Delete comments
        comments_to_delete = [c_id for c_id, c in storage.comments.items() if c["article_id"] == article_id]
        for c_id in comments_to_delete:
            del storage.comments[c_id]

        # Send 204 No Content
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()

    def _handle_favorite_article(self, storage: InMemoryStorage, slug: str, current_user_id: Optional[int]):
        """POST /articles/{slug}/favorite - Favorite article"""
        user_id = self._require_auth(current_user_id)

        article = get_article_by_slug(slug, storage)
        if not article:
            self._send_error(404, {"errors": {"body": ["Article not found"]}})
            return

        storage.favorites[user_id].add(article["id"])
        self._send_response(200, {"article": create_article_response(article, storage, user_id)})

    def _handle_unfavorite_article(self, storage: InMemoryStorage, slug: str, current_user_id: Optional[int]):
        """DELETE /articles/{slug}/favorite - Unfavorite article"""
        user_id = self._require_auth(current_user_id)

        article = get_article_by_slug(slug, storage)
        if not article:
            self._send_error(404, {"errors": {"body": ["Article not found"]}})
            return

        storage.favorites[user_id].discard(article["id"])
        self._send_response(200, {"article": create_article_response(article, storage, user_id)})

    # Comment endpoints
    def _handle_get_comments(self, storage: InMemoryStorage, slug: str, current_user_id: Optional[int]):
        """GET /articles/{slug}/comments - Get comments"""
        article = get_article_by_slug(slug, storage)
        if not article:
            self._send_error(404, {"errors": {"body": ["Article not found"]}})
            return

        comments = [c for c in storage.comments.values() if c["article_id"] == article["id"]]
        comments.sort(key=lambda x: x["createdAt"], reverse=True)

        comment_responses = [create_comment_response(c, storage, current_user_id) for c in comments]
        self._send_response(200, {"comments": comment_responses})

    def _handle_create_comment(self, storage: InMemoryStorage, slug: str, current_user_id: Optional[int]):
        """POST /articles/{slug}/comments - Create comment"""
        user_id = self._require_auth(current_user_id)

        article = get_article_by_slug(slug, storage)
        if not article:
            self._send_error(404, {"errors": {"body": ["Article not found"]}})
            return

        data = self._get_request_body()
        comment_data = data.get("comment", {})
        body = comment_data.get("body")

        if not body:
            self._send_error(422, {"errors": {"body": ["Body is required"]}})
            return

        # Create comment
        comment_id = storage.comment_id_counter
        storage.comment_id_counter += 1

        current_time = get_current_time()
        comment = {
            "id": comment_id,
            "body": body,
            "article_id": article["id"],
            "author_id": user_id,
            "createdAt": current_time,
            "updatedAt": current_time,
        }

        storage.comments[comment_id] = comment

        self._send_response(200, {"comment": create_comment_response(comment, storage, user_id)})

    def _handle_delete_comment(
        self, storage: InMemoryStorage, slug: str, comment_id: int, current_user_id: Optional[int]
    ):
        """DELETE /articles/{slug}/comments/{id} - Delete comment"""
        user_id = self._require_auth(current_user_id)

        article = get_article_by_slug(slug, storage)
        if not article:
            self._send_error(404, {"errors": {"body": ["Article not found"]}})
            return

        comment = storage.comments.get(comment_id)
        if not comment or comment["article_id"] != article["id"]:
            self._send_error(404, {"errors": {"body": ["Comment not found"]}})
            return

        # Only comment author or article author can delete
        if comment["author_id"] != user_id and article["author_id"] != user_id:
            self._send_error(403, {"errors": {"body": ["Forbidden"]}})
            return

        del storage.comments[comment_id]

        # Send 204 No Content
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()

    # Tag endpoints
    def _handle_get_tags(self, storage: InMemoryStorage):
        """GET /tags - Get all tags"""
        self._send_response(200, {"tags": sorted(storage.tags)})

    def do_OPTIONS(self):
        """Handle OPTIONS requests for CORS"""
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()


def run_server(port: int = 8000):
    """Run the RealWorld API server"""
    server_address = ("", port)
    httpd = HTTPServer(server_address, RealWorldHandler)  # ty: ignore[invalid-argument-type]

    print(f"RealWorld API Server running on http://localhost:{port}")
    print("API endpoints available:")
    print("  POST   /users  -------------------------- Register")
    print("  POST   /users/login  -------------------- Login")
    print("  GET    /user  --------------------------- Current user")
    print("  PUT    /user  --------------------------- Update user")
    print("  GET    /profiles/{username}  ------------ Get profile")
    print("  POST   /profiles/{username}/follow  ----- Follow user")
    print("  DELETE /profiles/{username}/follow  ----- Unfollow user")
    print("  GET    /articles  ----------------------- List articles")
    print("  GET    /articles/feed  ------------------ Get feed")
    print("  POST   /articles  ----------------------- Create article")
    print("  GET    /articles/{slug}  ---------------- Get article")
    print("  PUT    /articles/{slug}  ---------------- Update article")
    print("  DELETE /articles/{slug}  ---------------- Delete article")
    print("  POST   /articles/{slug}/favorite  ------- Favorite article")
    print("  DELETE /articles/{slug}/favorite  ------- Unfavorite article")
    print("  GET    /articles/{slug}/comments  ------- Get comments")
    print("  POST   /articles/{slug}/comments  ------- Create comment")
    print("  DELETE /articles/{slug}/comments/{id}  -- Delete comment")
    print("  GET    /tags  --------------------------- Get tags")
    print("\nPress Ctrl+C to stop the server")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server...")
        httpd.shutdown()


if __name__ == "__main__":
    import sys

    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    run_server(port)
