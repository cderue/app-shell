import { Stack } from "@carbon/react";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import React from 'react';
import Layout from "@/components/layout/Layout";

const SuiviProjet = dynamic(() => import('suivi/SuiviProjet'), { ssr: false });
const ListeProjets = dynamic(() => import('suivi/ListeProjets'), { ssr: false });


const SuiviProjetLayout = () => {
    const router = useRouter();

    return (
        <Layout>
            <Stack gap={8}>
                <ListeProjets />
                {router.query.id && <SuiviProjet/>}
            </Stack>
        </Layout>
    );
};

export default SuiviProjetLayout;
