<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // Added
        
        // Gate::define('auteur', function($user){
        //     return ($user->status == 1 && $user->status == 3 );
        // });
        // Gate::define('annonceur', function($user){
        //     return ($user->status == 2 && $user->status == 3 );
        // });
        // Gate::define('admin', function($user){
        //     return ($user->status == 3 );
        // });
    }
}
