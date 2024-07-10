// pages/orders.js
import DashboardLayout from "@/components/molecules/Dashboardlayout";
import AccountData from "@/components/organisms/AccountData";
import Footer from "@/components/organisms/Footer";
import Headermain from "@/components/organisms/Headermain";

const AddressPage = () => {
    return (
        <div>

            <DashboardLayout>
                <h1 className="text-2xl font-bold">Address</h1>
                <p>Here you can manage your orders.</p>
            </DashboardLayout>

        </div>
    );
};

export default AddressPage;
