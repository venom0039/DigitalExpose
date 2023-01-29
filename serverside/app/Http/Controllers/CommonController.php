<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Repositories\Interfaces\ILogRepsitory;

class CommonController extends Controller
{
    private $logRepo;

    public function __construct(ILogRepsitory $logRepository)
    {
        $this->logRepo = $logRepository;
    }

    public function login(Request $request){
        $data = file_get_contents('php://input');
        $this->logRepo->logAll($data);
        return response()->json("" , 200);
    }
}
