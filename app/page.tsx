import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Home = () => {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (!token) {
            router.push("/auth/login");
        }
    }, [router]);

    return (
        <div>

        </div>
    );
};

export default Home;
