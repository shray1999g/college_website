import "../StyleSheets/Departments.css";
import "../Global.css"
import DepartmentContent from "../Components/DepartmentContent"

export default function Departments(props)
{
    return (
        <main id="DepartmentPage" className="DepartmentPage">
            <div className="heading-container">
                <h1>About Departments</h1>
                <div className="heading-border"></div>
            </div>
            <div>
                <DepartmentContent />
            </div>
        </main>
    );
}