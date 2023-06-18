
## Learning Laravel

1. Install docker compose to your computer.
2. Copy "env.example" file and change the file name to ".env".
3. Run "docker compose run --rm artisan generate:key" for create new key and set to APP_KEY argument.
4. Run "docker compose run --rm artisan migrate" for create tables the project needs.
5. Run "docker compose run --rm artisan db:seed" for create default data.