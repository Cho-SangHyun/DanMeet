import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SelectCondition = ({opponent, authService}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [userId, setUserId] = useState(location.state?.userId);

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user){
                setUserId(user.uid);
            }
            else{
                navigate("/home");
            }
        })
    }, [authService, navigate]);

    return(
        <>
            {opponent}
        </>
    )
}
export default SelectCondition;