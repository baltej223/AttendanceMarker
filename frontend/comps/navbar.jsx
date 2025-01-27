export default function Navbar({className}){
    return(<>
    <div className={`w-full h-[50px] bg-gray-200 ${className}`}>
        <div className="pl-20 flex items-center h-[50px] gap-x-20">
            <a href="." className="text-black font-bold">Attendence</a>
            <a href="./Attendence_Calender" className="text-black font-bold">Attendence calender</a>
        </div>
    </div>
    </>);
}