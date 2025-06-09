########################
# Dummy

run-dummy:
	python realworld_dummy_server.py

dummy-test:
	cd e2e-testing/postman/; APIURL=http://localhost:8000 ./run-api-tests.sh
