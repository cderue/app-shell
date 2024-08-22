import dynamic from "next/dynamic";
import React from 'react';
import Layout from '@/components/layout/Layout';

const PresentationValeur = dynamic(() => import('acquisition/PresentationValeur'), { ssr: false });

const PresentationValeurLayout = () => {
    return (
        <Layout>
            <PresentationValeur/>
        </Layout>
    );
};

export default PresentationValeurLayout;
