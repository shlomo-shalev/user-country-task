<?php

namespace App\Http\Middleware;

// tools
use Closure;
use Illuminate\Support\Str;
use GeoIp2\Database\Reader;
use Illuminate\Http\Request;
use GeoIp2\Exception\AddressNotFoundException;

class AllowIpsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $is_allow = false;
        try {
            $reader = new Reader('/var/www/html/sources/GeoLite2-Country.mmdb');

            $record = $reader->city($request->ip());

            $is_allow = $record->country->isoCode === 'IL';
        } 
        catch (AddressNotFoundException $e) {
            $is_allow = Str::startsWith($request->ip(), ['127.', '192.168.', '::1']);
        }

            return $is_allow ? $next($request) : response('', 200);
    }
}
