<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function index()
    {
        $users = User::all();
        return response()->json(['users' => $users], 200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'organization' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'password' => 'required|string|max:255',
            'userRole' => 'required|string|max:255',
        ]);

        $user = User::create($validatedData);
    
        return response()->json(['user' => $user], 201);
    }
    
    public function show($id)
    {
        $user = User::findOrFail($id);

        return response()->json(['user' => $user], 200);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $requestData = $request->all();

        $user->update($requestData);

        return response()->json(['message' => 'user updated successfully'], 200);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json(['message' => 'user deleted successfully'], 200);
    }
}
