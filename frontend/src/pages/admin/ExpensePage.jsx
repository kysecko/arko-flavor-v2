import { PlusIcon } from "@heroicons/react/24/outline";
import DropdownButton from "../../components/ui/DropdownButton";

function ExpensePage() {
    return (
        <div>

            {/* header */}
            <div>
                <h2 className="text-lg sm:text-2xl font-bold">
                    Expenses
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Get an overview of inventory, orders, suppliers, sales, and waste tracking in one place.
                </p>
            </div>

            <hr className="my-4 border-gray-200" />
            {/* filtering */}
            <div className="flex flex-row justify-end mt-5 w-full">
                <DropdownButton
                    icon={PlusIcon}
                    label="Add New Expenses"
                    options={[
                        { value: "business_record", label: "Business Record" },
                        { value: "bill_payment", label: "Bill Payment" },
                    ]}
                    onSelect={(value) => console.log("selected:", value)}
                    className=" w-64!"
                />
            </div>
        </div>
    );
}

export default ExpensePage;