import { Column, Grid } from '@carbon/react';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import React from 'react';
import Layout from "@/components/layout/Layout";

const FormulaireCreationProjet = dynamic(() => import('acquisition/CreationProjet'), { ssr: false });

const CreationProjet = () => {
    const router = useRouter();

    const handleSuccessSubmit = async () => {
        router.push('/suivi-projet');
    };

    return (
        <Layout>
            <Grid>
                <Column span={4}/>
                <Column span={8}>
                    <FormulaireCreationProjet onSuccessSubmit={handleSuccessSubmit} />
                </Column>
                <Column span={4}/>
            </Grid>
        </Layout>
    );
};

export default CreationProjet;
