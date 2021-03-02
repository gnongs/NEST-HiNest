import { Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return "This will return all movies"
    };

    @Get("/:id")
    getOne(@Param("id") id: string) {
        return `This will retrun One movie with the id: ${id}`;
    }

    @Post()
    create() {
        return `This will create a movie`;
    }

    @Delete("/:id")
    remove(@Param('id') movieId: string) {
        return `This will remove a movie with the id: ${movieId}`;
    }

    @Patch('/:id')
    patch(@Param('id') movieId: string) {
        return `This will patch movie with the id: ${movieId}`;
    }
}