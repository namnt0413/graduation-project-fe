import {Routes, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';
import {useLayoutEffect, useEffect} from 'react';

export default function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        document.body.scrollTo(0, 0); 
    }, [location]);

}
