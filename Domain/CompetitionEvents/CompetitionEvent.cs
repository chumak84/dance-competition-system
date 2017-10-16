using System;

namespace Domain.CompetitionEvents
{
    public class CompetitionEventCreated: IDomainEvent
    {
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
    }
}
