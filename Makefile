########################
# Dummy

run-dummy-for-prod:
	python realworld_dummy_server.py

run-dummy-for-postman-test:
	BYPASS_ORIGIN_CHECK=True DISABLE_ISOLATION_MODE=True python realworld_dummy_server.py

test-dummy-server-api-with-postman:
	DELAY_REQUEST=3 APIURL=http://localhost:8000 ./api/run-api-tests.sh || \
	echo '\n\033[0;31m    ENSURE DEMO SERVER IS RUNNING WITH \033[0m`make run-dummy-for-postman-test`\n'

test-dummy-server-unittest:
	BYPASS_ORIGIN_CHECK=True python -m unittest realworld_dummy_server.py
