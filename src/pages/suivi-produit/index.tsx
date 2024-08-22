import dynamic from "next/dynamic";
import React from "react";
import Layout from '@/components/layout/Layout';

const SuiviProduit = dynamic(() => import('suivi/SuiviProduit'), { ssr: false });

const SuiviProduitLayout = () => {
    return (
        <Layout>
            <SuiviProduit/>
        </Layout>
    );
};

export default SuiviProduitLayout;
