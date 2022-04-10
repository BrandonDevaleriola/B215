# syntax=docker/dockerfile:1
# [Choice] Ruby version: 2, 2.7, 2.6, 2.5
ARG VARIANT=2.5
FROM ruby:${VARIANT}

# update system and install packages you need
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client && npm install -g yarn@1

# define the directory that we want to use
WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
# install Bundler
RUN bundle install

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]