import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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
* @see \App\Http\Controllers\StudentTopController::top
 * @see app/Http/Controllers/StudentTopController.php:20
 * @route '/students/top'
 */
export const top = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: top.url(options),
    method: 'get',
})

top.definition = {
    methods: ["get","head"],
    url: '/students/top',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentTopController::top
 * @see app/Http/Controllers/StudentTopController.php:20
 * @route '/students/top'
 */
top.url = (options?: RouteQueryOptions) => {
    return top.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentTopController::top
 * @see app/Http/Controllers/StudentTopController.php:20
 * @route '/students/top'
 */
top.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: top.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StudentTopController::top
 * @see app/Http/Controllers/StudentTopController.php:20
 * @route '/students/top'
 */
top.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: top.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StudentTopController::top
 * @see app/Http/Controllers/StudentTopController.php:20
 * @route '/students/top'
 */
    const topForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: top.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StudentTopController::top
 * @see app/Http/Controllers/StudentTopController.php:20
 * @route '/students/top'
 */
        topForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: top.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StudentTopController::top
 * @see app/Http/Controllers/StudentTopController.php:20
 * @route '/students/top'
 */
        topForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: top.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    top.form = topForm
const students = {
    index,
top,
}

export default students