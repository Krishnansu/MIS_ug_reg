<?php

namespace App\Http\Middleware;
use Closure;

class Cors
{
    public function handle($request, Closure $next)
    {
        \Illuminate\Support\Facades\Log::info("CORS middleware hit");
        $headers = [
            'Access-Control-Allow-Origin'      => 'http://localhost:3000',  // Replace with your frontend origin
            'Access-Control-Allow-Methods'     => 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Credentials' => 'true',
            'Access-Control-Allow-Headers'     => 'X-Requested-With, Content-Type, X-Token-Auth, Authorization' 
        ];

        if ($request->isMethod('OPTIONS')) {
            return response()->json('{"method":"OPTIONS"}', 200, $headers);
        }

        $response = $next($request);

        foreach ($headers as $key => $value) {
            $response->headers->set($key, $value);
        }
        // \Illuminate\Support\Facades\Log::info($request);

        return $response;
    }
}
