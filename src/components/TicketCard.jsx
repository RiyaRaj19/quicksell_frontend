function getPriorityLabel(priority) {
    return {
      4: { label: 'Urgent', className: 'priority-urgent', icon: '🔴' },
      3: { label: 'High', className: 'priority-high', icon: '🟠' },
      2: { label: 'Medium', className: 'priority-medium', icon: '🟡' },
      1: { label: 'Low', className: 'priority-low', icon: '🟢' },
      0: { label: 'No Priority', className: 'priority-none', icon: '⚪' },
    }[priority] || { label: 'No Priority', className: 'priority-none', icon: '⚪' };
  }
  
  function TicketCard({ ticket, users }) {
    const user = users.find(u => u.id === ticket.userId) || { name: 'Unassigned' };
    const priority = getPriorityLabel(ticket.priority);
  
    return (
      <div className="ticket-card">
        <h3>{ticket.title}</h3>
        <div className="tag">
          {priority.icon} {ticket.tag.join(', ')}
        </div>
        <p>Assigned to: {user.name}</p>
        <img 
          src={`https://ui-avatars.com/api/?name=${user.name}`} 
          alt={user.name} 
          className="avatar" 
        />
      </div>
    );
  }
  
  export default TicketCard;