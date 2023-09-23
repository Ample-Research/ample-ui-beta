import { useState } from 'react';
import SearchBar from './SearchBar';
import HistoryGrid from './HistoryGrid';
import HistoryLoading from './HistoryLoading';
import HistoryError from './HistoryError';

const HistorySection = ({ userHistory, isLoading, error }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredHistory = userHistory.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="history-section">
      <SearchBar setSearchTerm={setSearchTerm} />
      {isLoading && <HistoryLoading />}
      {error && <HistoryError error={error} />}
      {!isLoading && !error && <HistoryGrid tasks={filteredHistory} />}
    </div>
  );
};

export default HistorySection;