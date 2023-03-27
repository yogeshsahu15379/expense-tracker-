
const AddExpense = () =>{
    return (
        <>
            <div className="user_greet">
                <h1>hello, <span style={{color:"green"}}>{window.localStorage.getItem("user")} !</span></h1>
            </div>

        </>
    );
}

export default AddExpense;