function GroupControls({ grouping, sorting, setGrouping, setSorting }) {
    return (
      <div className="group-controls">
        <label>
          Group By:
          <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
            <option value="Status">Status</option>
            <option value="User">User</option>
            <option value="Priority">Priority</option>
          </select> 
        </label>
        <label>
          Sort By:
          <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
            <option value="Priority">Priority</option>
            <option value="Title">Title</option>
          </select>
        </label>
      </div>
    );
  }
  
  export default GroupControls;
  