import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StudentTopController::index
 * @see app/Http/Controllers/StudentTopController.php:11
 * @route '/students'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/students',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentTopController::index
 * @see app/Http/Controllers/StudentTopController.php:11
 * @route '/students'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentTopController::index
 * @see app/Http/Controllers/StudentTopController.php:11
 * @route '/students'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StudentTopController::index
 * @see app/Http/Controllers/StudentTopController.php:11
 * @route '/students'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StudentTopController::index
 * @see app/Http/Controllers/StudentTopController.php:11
 * @route '/students'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StudentTopController::index
 * @see app/Http/Controllers/StudentTopController.php:11
 * @route '/students'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StudentTopController::index
 * @see app/Http/Controllers/StudentTopController.php:11
 * @route '/students'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\StudentTopController::topStudent
 * @see app/Http/Controllers/StudentTopController.php:20
 * @route '/students/top'
 */
export const topStudent = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: topStudent.url(options),
    method: 'get',
})

topStudent.definition = {
    methods: ["get","head"],
    url: '/students/top',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentTopController::topStudent
 * @see app/Http/Controllers/StudentTopController.php:20
 * @route '/students/top'
 */
topStudent.url = (options?: RouteQueryOptions) => {
    return topStudent.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentTopController::topStudent
 * @see app/Http/Controllers/StudentTopController.php:20
 * @route '/students/top'
 */
topStudent.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: topStudent.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StudentTopController::topStudent
 * @see app/Http/Controllers/StudentTopController.php:20
 * @route '/students/top'
 */
topStudent.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: topStudent.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StudentTopController::topStudent
 * @see app/Http/Controllers/StudentTopController.php:20
 * @route '/students/top'
 */
    const topStudentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: topStudent.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StudentTopController::topStudent
 * @see app/Http/Controllers/StudentTopController.php:20
 * @route '/students/top'
 */
        topStudentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: topStudent.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StudentTopController::topStudent
 * @see app/Http/Controllers/StudentTopController.php:20
 * @route '/students/top'
 */
        topStudentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: topStudent.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    topStudent.form = topStudentForm
const StudentTopController = { index, topStudent }

export default StudentTopController