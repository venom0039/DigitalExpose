<?php

namespace App\Repositories\Classes;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use App\Repositories\Interfaces\ILogRepsitory;

class LogRepository implements ILogRepsitory{
    public function logAll($data){
        $now = Carbon::now();
        DB::table('logs')->insert([
            "data" => $data,
            "created_at" => $now,
            "updated_at" => $now
        ]);
    }
}