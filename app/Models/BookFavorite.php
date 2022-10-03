<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BookFavorite extends Model
{

    use HasFactory;
    protected $table = 'book_favorite';
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'user_id',
        'book_id',
        'book_type',
        'created_at',
        'updated_at',
        'active'
    ];
}
