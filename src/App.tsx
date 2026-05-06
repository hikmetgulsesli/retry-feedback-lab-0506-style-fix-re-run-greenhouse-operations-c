import { useAppContext } from './contexts/AppContext';
import { LeadsDashboard } from './screens/LeadsDashboard';
import { PipelinePipeline } from './screens/PipelinePipeline';
import { InsightsDashboard } from './screens/InsightsDashboard';
import { Settings } from './screens/Settings';
import { LeadDetailsForm } from './screens/LeadDetailsForm';
import { EmptyState } from './screens/EmptyState';
import { StorageErrorState } from './screens/StorageErrorState';
import { ProfilePanel } from './screens/ProfilePanel';

export default function App() {
  const { screen, storageError, dismissStorageError } = useAppContext();

  if (storageError) {
    return <StorageErrorState error={storageError} onDismiss={dismissStorageError} />;
  }

  switch (screen) {
    case 'leads':
      return <LeadsDashboard />;
    case 'pipeline':
      return <PipelinePipeline />;
    case 'insights':
      return <InsightsDashboard />;
    case 'settings':
      return <Settings />;
    case 'lead-form':
      return <LeadDetailsForm />;
    case 'empty':
      return <EmptyState />;
    case 'profile':
      return <ProfilePanel />;
    case 'error':
      return <StorageErrorState />;
    default:
      return <LeadsDashboard />;
  }
}
