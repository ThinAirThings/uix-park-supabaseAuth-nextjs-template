#!/bin/bash

# Get the directory of the current script
SCRIPT_DIR=$(dirname "$(realpath "$0")")

docker run \
    --name neo4j-uix \
    -p 7474:7474 -p 7687:7687 \
    -e NEO4J_apoc_export_file_enabled=true \
    -e NEO4J_apoc_import_file_enabled=true \
    -e NEO4J_apoc_import_file_use__neo4j__config=true \
    -e NEO4J_dbms_security_procedures_unrestricted=apoc.* \
    -e NEO4JLABS_PLUGINS='["apoc"]' \
    -e NEO4J_AUTH=neo4j/testpassword \
    -v ${SCRIPT_DIR}/neo4j/data:/data \
    -d \
    neo4j:latest