import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticated, selectIsAuthenticated } from '../slice/authSlice';
import { useGetTasksQuery, useGetTasksNoCacheQuery } from '../slice/taskSlice';


const Homepage = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const dispatch = useDispatch();

    // GET endpoint with caching enabled
    const { data: tasksWithCache, isLoading: isLoadingWithCache, isError: isErrorWithCache } = useGetTasksQuery();

    // GET endpoint with caching disabled
    const { data: tasksNoCache, isLoading: isLoadingNoCache, isError: isErrorNoCache } = useGetTasksNoCacheQuery();


    const handleLogin = () => {
        dispatch(setAuthenticated(true));
    };

    return (
        <div>
            <p>Is Authenticated: {isAuthenticated.toString()}</p>
            <button onClick={handleLogin}>Login</button>
            <div>
                <h2>Task List with Cache</h2>
                {isLoadingWithCache && <p>Loading tasks with cache...</p>}
                {isErrorWithCache && <p>Error loading tasks with cache</p>}
                {tasksWithCache && (
                    <ul>
                        {tasksWithCache.map((task) => (
                            <li key={task.id}>{task.title}</li>
                        ))}
                    </ul>
                )}

                <h2>Task List without Cache</h2>
                {isLoadingNoCache && <p>Loading tasks without cache...</p>}
                {isErrorNoCache && <p>Error loading tasks without cache</p>}
                {tasksNoCache && (
                    <ul>
                        {tasksNoCache.map((task) => (
                            <li key={task.id}>{task.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Homepage;
