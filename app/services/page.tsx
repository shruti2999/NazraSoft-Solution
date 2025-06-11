import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/services/Section1";
import Section2 from "@/components/sections/services/Section2";
import Section3 from "@/components/sections/services/Section3";
import Section9 from "@/components/sections/home/Section9";
import PageHeader from "@/components/sections/PageHeader";

export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Our Services" current_page="Our Services" />
                <Section1 />
                <Section3 />
                
                <Section9 border-top="" />
            </Layout>
        </>
    );
}
