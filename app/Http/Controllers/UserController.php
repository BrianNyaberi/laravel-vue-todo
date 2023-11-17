<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\User;


class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function index()
    {
        $items = User::all();
        return response()->json(['items' => $items], 200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            // Add other validation rules as needed
        ]);

        $item = User::create($validatedData);

        return response()->json(['item' => $item], 201);
    }

    public function show($id)
    {
        $item = User::findOrFail($id);

        return response()->json(['item' => $item], 200);
    }

    public function update(Request $request, $id)
    {
        $item = User::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            // Add other validation rules as needed
        ]);

        $item->update($validatedData);

        return response()->json(['message' => 'Item updated successfully'], 200);
    }

    public function destroy($id)
    {
        $item = User::findOrFail($id);
        $item->delete();

        return response()->json(['message' => 'Item deleted successfully'], 200);
    }
}