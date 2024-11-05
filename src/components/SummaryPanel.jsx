function SummaryPanel({ priorityCounts, statusCounts, grouping }) {
    return (
      <div className="summary-panel">
        {grouping === 'Priority' && (
          <div className="summary-row">
            <div className="summary-item priority-none">
              <span>No priority</span>
              <strong>{priorityCounts.none}</strong>
            </div>
            <div className="summary-item priority-urgent">
              <span>Urgent</span>
              <strong>{priorityCounts.urgent}</strong>
            </div>
            <div className="summary-item priority-high">
              <span>High</span>
              <strong>{priorityCounts.high}</strong>
            </div>
            <div className="summary-item priority-medium">
              <span>Medium</span>
              <strong>{priorityCounts.medium}</strong>
            </div>
            <div className="summary-item priority-low">
              <span>Low</span>
              <strong>{priorityCounts.low}</strong>
            </div>
          </div>
        )}
  
        {grouping === 'Status' && (
          <div className="summary-row">
            <div className="summary-item status-todo">
              <span>To-Do</span>
              <strong>{statusCounts.todo}</strong>
            </div>
            <div className="summary-item status-inprogress">
              <span>In Progress</span>
              <strong>{statusCounts.inProgress}</strong>
            </div>
            <div className="summary-item status-backlog">
              <span>Backlog</span>
              <strong>{statusCounts.backlog}</strong>
            </div>
          </div>
        )}
  
        {grouping === 'User' && (
          <div className="summary-row">
            <p>User-based summaries can go here.</p>
          </div>
        )}
      </div>
    );
  }
  
  export default SummaryPanel;
  