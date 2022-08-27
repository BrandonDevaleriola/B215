# Laravel
https://laravel.com/docs/9.x/installation

## Notes about this setup

Sail command used: 
	curl -s "https://laravel.build/web-app?with=mysql,redis,meilisearch,minio,mailhog&devcontainer" | bash

Alias added to make sail global using:
	sail="$HOME/Documents/my-repos/my-github-repos/B215/projects/php/example-app/vendor/bin/sail"


## Laravel Library Reference

* Artisan(https://laravel.com/docs/9.x/artisan)
Artisan is the command line interface included with Laravel

* Breeze(https://laravel.com/docs/9.x/starter-kits#laravel-breeze)
Starter kit which uses templates for Blade templating or React/Vue scaffolding via Inertia(https://inertiajs.com/) frontend

* Broadcasting (https://laravel.com/docs/9.x/broadcasting previously "Echo" https://github.com/laravel/echo)
Listen for WebSocket events broadcast by your application(broadcasted channels with Pusher or Redis)

* Blade(https://laravel.com/docs/9.x/blade)
simple, yet powerful templating engine

* Cashier(https://laravel.com/docs/9.x/billing#introduction)
Offers payments for: subscription billing services, subscription management, coupons, swapping subscription, subscription "quantities", cancellation grace periods, and generate invoice PDFs

* Dusk(https://laravel.com/docs/9.x/dusk)
Automated browser testing with ChromeDriver

* Fortify (https://laravel.com/docs/9.x/fortify#what-is-fortify)
A frontend agnostic authentication for registers the routes and controllers needed to implement all of Laravel's authentication features, including login, registration, password reset, email verification

* Horizon (https://laravel.com/docs/9.x/horizon)
Dashbaord for monitoring event driven Redis queues

* Jetstream(https://jetstream.laravel.com/2.x/introduction.html)
An advanced starter kit which uses Laravel Sanctum for login, authentication, registration, email verification, two-factor authentication, session management, and optional team management features.

* Mix (https://laravel-mix.com/docs/6.0/installation)
Compile your JavaScript and CSS using Webpack with zero configuration.

* Octane(https://laravel.com/docs/9.x/octane)
Supercharge your application's performance using microservices using  Open Swoole(https://openswoole.com/), Swoole(https://github.com/swoole/swoole-src), and RoadRunner(https://roadrunner.dev/) requires PHP 8.0+

* Passport (https://laravel.com/docs/9.x/passport)
Provides a full OAuth2 server implementation for your Laravel application in a matter of minutes. Passport is built on top of the League OAuth2 server(https://github.com/thephpleague/oauth2-server)

* Pint(https://laravel.com/docs/9.x/pint)
PHP Style linter for Laravel source code repos

* Sanctum (https://github.com/laravel/sanctum)
API for solving issues for API Tokens and SPA Authentication

* Sail(https://laravel.com/docs/9.x/sail#introduction)
Local development using Docker and Docker Compose.

* Scout (https://laravel.com/docs/9.x/scout#introduction)
Provides a simple, driver based solution for adding full-text search to your models.

* Socialite (https://laravel.com/docs/9.x/socialite)
Form based authentication and Social OAuth provider login

* Telescope (https://laravel.com/docs/9.x/telescope#introduction)
Live application debugging tool and observability for: exceptions, log entries, database queries, queued jobs, mail, notifications, cache operations, scheduled tasks, variable dumps

## Corelated libraries

* PestPHP(https://pestphp.com/)
testing

* InertiaJS (https://inertiajs.com/)
Inertia allows you to create fully client-side rendered, single-page apps, without much of the complexity that comes with modern SPAs. It does this by leveraging existing server-side frameworks.

* Livewire (https://laravel-livewire.com/)
Laravel framework for building components that have SPA-like dynamic lifecycle behaviours including data fetching and updating without needing to handle SPA implementation details

* AlpineJS(https://alpinejs.dev/)
A library that let's html elements have access to custom directive that provide rendering logic

* Meilisearch (https://docs.meilisearch.com/learn/what_is_meilisearch/overview.html)
A open source search engine that can be used with Laravel Scout. Meilisearch is a RESTful search API. It aims to be a ready-to-go solution for everyone who wants a fast and relevant search experience for their end-users 

* DBAL (https://www.doctrine-project.org/projects/dbal.html)
PHP database abstraction layer (DBAL) with many features for database schema introspection and management

* Guzzle(https://docs.guzzlephp.org/en/stable/)
Guzzle is a PHP HTTP client that makes it easy to send HTTP requests and trivial to integrate with web services.
