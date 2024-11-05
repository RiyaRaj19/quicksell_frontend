import TicketCard from './TicketCard';
import SummaryPanel from './SummaryPanel';

function groupTickets(tickets, grouping) {
  return tickets.reduce((acc, ticket) => {
    const group = grouping === 'User' ? ticket.userId :
                  grouping === 'Priority' ? ticket.priority : ticket.status;
    acc[group] = acc[group] || [];
    acc[group].push(ticket);
    return acc;
  }, {});
}

function sortTickets(groupedTickets, sorting) {
  Object.keys(groupedTickets).forEach(group => {
    groupedTickets[group].sort((a, b) => {
      if (sorting === 'Priority') return b.priority - a.priority;
      if (sorting === 'Title') return a.title.localeCompare(b.title);
      return 0;
    });
  });
  return groupedTickets;
}

function getPriorityTitle(priority) {
  switch (priority) {
    case 4: return { title: 'Urgent', icon: '🔴', color: '#FF5722' };
    case 3: return { title: 'High', icon: '🟠', color: '#FF9800' };
    case 2: return { title: 'Medium', icon: '🟡', color: '#FFC107' };
    case 1: return { title: 'Low', icon: '🟢', color: '#8BC34A' };
    case 0: return { title: 'No priority', icon: '⚪', color: '#BDBDBD' };
    default: return { title: 'Unknown', icon: '', color: '#757575' };
  }
}

function KanbanBoard({ tickets, users, grouping, sorting }) {
  let groupedTickets = groupTickets(tickets, grouping);
  groupedTickets = sortTickets(groupedTickets, sorting);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group, index) => {
        const { title, icon, color } = getPriorityTitle(parseInt(group, 10));
        return (
          <div key={index} className="kanban-column">
            <h2 style={{ color }}>
              {icon} {title} <span className="column-count">({groupedTickets[group].length})</span>
            </h2>
            {groupedTickets[group].map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} users={users} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default KanbanBoard;



// import TicketCard from './TicketCard';
// import SummaryPanel from './SummaryPanel';

// function groupTickets(tickets, grouping) {
//   return tickets.reduce((acc, ticket) => {
//     const group = grouping === 'User' ? ticket.userId :
//                   grouping === 'Priority' ? ticket.priority : ticket.status;
//     acc[group] = acc[group] || [];
//     acc[group].push(ticket);
//     return acc;
//   }, {});
// }

// function sortTickets(groupedTickets, sorting) {
//   Object.keys(groupedTickets).forEach(group => {
//     groupedTickets[group].sort((a, b) => {
//       if (sorting === 'Priority') return b.priority - a.priority;
//       if (sorting === 'Title') return a.title.localeCompare(b.title);
//       return 0;
//     });
//   });
//   return groupedTickets;
// }

// function calculatePriorityCounts(tickets) {
//   return tickets.reduce(
//     (counts, ticket) => {
//       switch (ticket.priority) {
//         case 4:
//           counts.urgent += 1;
//           break;
//         case 3:
//           counts.high += 1;
//           break;
//         case 2:
//           counts.medium += 1;
//           break;
//         case 1:
//           counts.low += 1;
//           break;
//         case 0:
//           counts.none += 1;
//           break;
//         default:
//           break;
//       }
//       return counts;
//     },
//     { urgent: 0, high: 0, medium: 0, low: 0, none: 0 }
//   );
// }

// function calculateStatusCounts(tickets) {
//   return tickets.reduce(
//     (counts, ticket) => {
//       switch (ticket.status) {
//         case 'Todo':
//           counts.todo += 1;
//           break;
//         case 'In progress':
//           counts.inProgress += 1;
//           break;
//         case 'Backlog':
//           counts.backlog += 1;
//           break;
//         default:
//           counts.unknown += 1;
//           break;
//       }
//       return counts;
//     },
//     { todo: 0, inProgress: 0, backlog: 0, unknown: 0 }
//   );
// }

// function KanbanBoard({ tickets, users, grouping, sorting }) {
//   let groupedTickets = groupTickets(tickets, grouping);
//   groupedTickets = sortTickets(groupedTickets, sorting);

//   const priorityCounts = calculatePriorityCounts(tickets);
//   const statusCounts = calculateStatusCounts(tickets);

//   return (
//     <div>
//       <SummaryPanel 
//         priorityCounts={priorityCounts} 
//         statusCounts={statusCounts} 
//         grouping={grouping} 
//       />
      
//       <div className="kanban-board">
//         {Object.keys(groupedTickets).length > 0 ? (
//           Object.keys(groupedTickets).map((group, index) => (
//             <div key={index} className="kanban-column">
//               <h2>{group}</h2>
//               {groupedTickets[group].map(ticket => (
//                 <TicketCard key={ticket.id} ticket={ticket} users={users} />
//               ))}
//             </div>
//           ))
//         ) : (
//           <p>No tickets available</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default KanbanBoard;
