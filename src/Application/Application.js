import React from 'react';

const Application = () => {
    return (
        <>
            <div style={{ width: '400px', margin: '0 auto' }}>
                <form action="" style={{ textAlign: 'left' }}>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ width: '200px' }}>Date <span style={{ color: 'red' }}>*</span></div>
                        <div><input type="date" name="date" id="" required /></div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ width: '200px' }}>Amount <span style={{ color: 'red' }}>*</span></div>
                        <div><input type="number" name="number" id="" required /></div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ width: '200px' }}>Payment Mode <span style={{ color: 'red' }}>*</span></div>
                        <div>
                            <select name="payment_mode" id="">
                                <option value="cash">Cash</option>
                                <option value="check">Check</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ width: '200px' }}>Remark </div>
                        <div><input type="text" name="reamrk" id="" /></div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ width: '200px' }}></div>
                        <div>
                            <input type="submit" value="Submit" />
                            <input type="reset" value="Reset" />
                        </div>
                    </div>


                </form>
            </div>
        </>
    );
};

export default Application;