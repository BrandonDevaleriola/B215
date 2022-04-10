# Dockerized Rails Demo

Setup Steps
* (if linux): "$ sudo chown -R $USER:$USER ."
* generate rails app: "$ docker-compose run --no-deps web rails new . --force --database=postgresql"
* build the images: "$ docker-compose build"
* overrite config/database.yaml with temp-config/database.yaml
* run all images: "$ docker-compose up"