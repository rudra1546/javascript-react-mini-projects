function RecentActivity() {
    return (
        <div className='table card'>
            <h3>Recent Activity</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Portfolio Updated</td>
                        <td>Today</td>
                    </tr>
                    <tr>
                        <td>React Project Added</td>
                        <td>Yesterday</td>
                    </tr>
                    <tr>
                        <td>Github Push</td>
                        <td>2 days ago</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
export default RecentActivity;