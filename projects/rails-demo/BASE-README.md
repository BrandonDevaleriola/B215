# Dockerized Rails Demo

Setup Steps
* make a new branch to work from
* generate rails app: "$ docker-compose run --no-deps web rails new . --force --database=postgresql"
* (if linux): "$ sudo chown -R $USER:$USER ."
* move temp-config/database.yaml file move to config/ and overwrite database.yaml
* build the images: "$ docker-compose build"
* run all images: "$ docker-compose up"