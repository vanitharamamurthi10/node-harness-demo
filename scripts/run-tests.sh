#!/bin/sh
set -eu
npm test
test -f test-results/junit.xml
test -f coverage/lcov.info
