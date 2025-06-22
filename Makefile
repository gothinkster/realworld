########################
# Dummy

run-dummy:
	python realworld_dummy_server.py

dummy-test:
	DELAY_REQUEST=3 APIURL=http://localhost:8000 ./api/run-api-tests.sh || \
	echo '\n\033[0;31m    ENSURE DEMO SERVER IS RUNNING WITH \033[0m`make run-dummy`\n'
