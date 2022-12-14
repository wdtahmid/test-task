import React, { useEffect, useState } from 'react';

const Application = () => {

    const [receipts, setReceipts] = useState([]);

    useEffect(() => {
        console.log(receipts);
    }, [receipts]);

    const handle_receipt_details = (e) => {
        e.preventDefault();
        const r_date = e.target.date.value;
        const r_amount = e.target.amount.value;
        const r_payment_mode = e.target.payment_mode.value;
        const r_remark = e.target.remark.value;
        let r_id = Math.floor(Math.random() * 1000);

        const receipts_details = {
            r_id,
            r_date,
            r_amount,
            r_payment_mode,
            r_remark

        }

        setReceipts(current => [...current, receipts_details])

    }
    return (
        <>
            <div style={{ width: '400px', margin: '0 auto' }}>
                <form onSubmit={handle_receipt_details} style={{ textAlign: 'left' }}>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ width: '200px' }}>Date <span style={{ color: 'red' }}>*</span></div>
                        <div><input type="date" name="date" id="" required /></div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ width: '200px' }}>Amount <span style={{ color: 'red' }}>*</span></div>
                        <div><input type="number" name="amount" id="" required /></div>
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
                        <div><input type="text" name="remark" id="" /></div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ width: '200px' }}></div>
                        <div>
                            <input type="reset" value="Reset" />
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>

            <h1>Receipts Length: {receipts.length}</h1>
            {
                receipts.length > 0 &&

                <table style={{ width: '600px', margin: '50px auto', textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Payment Mode</th>
                            <th>Remark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            receipts.map((receipt) =>
                                <tr key={receipt.r_id}>
                                    <td>{receipt.r_date}</td>
                                    <td>{receipt.r_amount}</td>
                                    <td>{receipt.r_payment_mode}</td>
                                    <td>{receipt.r_remark}</td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            }
        </>
    );
};

export default Application;