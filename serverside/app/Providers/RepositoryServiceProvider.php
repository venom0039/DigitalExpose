<?php

namespace App\Providers;

use App\Repositories\Classes\LogRepository;

use App\Repositories\Interfaces\ILogRepsitory;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ILogRepsitory::class, LogRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
