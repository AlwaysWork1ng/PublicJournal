import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import MenuComponent from './MenuComponent'
import VerseComponent from './GetVerseComponent';


const SwordPage = () => {
  const [scripture, setScripture] = useState('');
  const [word, setWord] = useState('');
  const [observe, setObserve] = useState('');
  const [request, setRequest] = useState('');
  const [dedicate, setDedicate] = useState('');

  const downloadData = () => {
    let dataToDownload = `Scripture:\n${scripture}\n\nWord:\n${word}\n\nObserve:\n${observe}\n\nRequest:\n${request}\n\nDedicate:\n${dedicate}\n`;

    const blob = new Blob([dataToDownload], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sword-daily-drill.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>SWORD Daily Drill</h1>
      <MenuComponent />
      {/* Verse of the Day Placeholder - Replace with dynamic content if needed */}
      <Box>
        {/* Replace this with dynamically fetched verse */}
        <VerseComponent/>
      </Box>
      <Box>
        <TextField
          label="Scripture"
          multiline
          rows={4}
          value={scripture}
          onChange={(e) => setScripture(e.target.value)}
          fullWidth
          margin="normal"
          sx={{
            input: { color: 'black' }, // Changes the text color
            label: { color: 'black' }, // Changes the label color
            '.MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'black' }, // Changes the border color
              '&:hover fieldset': { borderColor: 'blue' }, // Changes the border color on hover
              '&.Mui-focused fieldset': { borderColor: 'red' } // Changes the border color when focused
            }
          }}
        />
        <TextField
          label="Word"
          multiline
          rows={4}
          value={word}
          onChange={(e) => setWord(e.target.value)}
          fullWidth
          margin="normal"
          sx={{
            input: { color: 'black' }, // Changes the text color
            label: { color: 'black' }, // Changes the label color
            '.MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'black' }, // Changes the border color
              '&:hover fieldset': { borderColor: 'blue' }, // Changes the border color on hover
              '&.Mui-focused fieldset': { borderColor: 'red' } // Changes the border color when focused
            }
          }}
        />      
        <TextField
          label="Observe"
          multiline
          rows={4}
          value={observe}
          onChange={(e) => setObserve(e.target.value)}
          fullWidth
          margin="normal"
          sx={{
            input: { color: 'black' }, // Changes the text color
            label: { color: 'black' }, // Changes the label color
            '.MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'black' }, // Changes the border color
              '&:hover fieldset': { borderColor: 'blue' }, // Changes the border color on hover
              '&.Mui-focused fieldset': { borderColor: 'red' } // Changes the border color when focused
            }
          }}
        />  
        <TextField
          label="Request"
          multiline
          rows={4}
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          fullWidth
          margin="normal"
          sx={{
            input: { color: 'black' }, // Changes the text color
            label: { color: 'black' }, // Changes the label color
            '.MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'black' }, // Changes the border color
              '&:hover fieldset': { borderColor: 'blue' }, // Changes the border color on hover
              '&.Mui-focused fieldset': { borderColor: 'red' } // Changes the border color when focused
            }
          }}
        />  
        <TextField
          label="Dedicate"
          multiline
          rows={4}
          value={dedicate}
          onChange={(e) => setDedicate(e.target.value)}
          fullWidth
          margin="normal"
          sx={{
            input: { color: 'black' }, // Changes the text color
            label: { color: 'black' }, // Changes the label color
            '.MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'black' }, // Changes the border color
              '&:hover fieldset': { borderColor: 'blue' }, // Changes the border color on hover
              '&.Mui-focused fieldset': { borderColor: 'red' } // Changes the border color when focused
            }
          }}
        />  
        </Box>
      <Button onClick={downloadData}>Download to txt</Button>
    </div>
  );
};

export default SwordPage;
