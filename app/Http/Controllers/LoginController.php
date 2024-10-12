<?php

namespace App\Http\Controllers;

use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
	public function login(Request $request)
	{

		$credentials = $request->validate([
			'email' => 'required',
			'password' => 'required',
		]);

		if (!Auth::attempt($credentials)) {
			throw ValidationException::withMessages([
				'email' => [
					__('auth.failed')
				]
			]);
		}

		return $request->user();
	}
	public function logout()
	{
		return Auth::logout();
	}

	public function check()
	{
		return response()->json(['isAuth' => true], 200);
	}
}
