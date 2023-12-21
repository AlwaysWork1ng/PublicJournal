import * as React from 'react';
import { TextField, Button, Box } from '@mui/material';
import feelingWheelImage from '../assets/FeelWheel.jpg';
import MenuComponent from './MenuComponent';
import Divider from '@mui/material/Divider';


const JournalPage = () => {
  const [thankfulFields, setThankfulFields] = React.useState(['']);
  const [thinkingFields, setThinkingFields] = React.useState([{ main: '', subs: [''] }]);

  const handleAddThankfulField = () => {
    setThankfulFields([...thankfulFields, '']);
  };

  const handleAddThinkingField = () => {
    setThinkingFields([...thinkingFields, { main: '', subs: [''] }]);
  };

  const handleAddSubField = (index: number) => {
    const newThinkingFields = [...thinkingFields];
    newThinkingFields[index].subs.push('');
    setThinkingFields(newThinkingFields);
  };

  const downloadData = () => {
    let dataToDownload = '';

    // Formatting thankfulFields data
    dataToDownload += 'Thankful Fields:\n';
    thankfulFields.forEach(field => {
      dataToDownload += `${field}\n`;
    });

    // Formatting thinkingFields data
    dataToDownload += '\nThinking Fields:\n';
    thinkingFields.forEach(field => {
      dataToDownload += `Main: ${field.main}\nSubs: ${field.subs.join(', ')}\n\n`;
    });

    // Creating a Blob for download
    const blob = new Blob([dataToDownload], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'journal-data.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
    <h1 style={{ textAlign: 'center' }}>Journal</h1>
      <MenuComponent/>
      <header>
        <h2>Thankful</h2>
        {thankfulFields.map((field, index) => (
          <TextField
          key={index}
          value ={field}
          onChange={(e) => {
            const newFields = [...thankfulFields];
            newFields[index] = e.target.value;
            setThankfulFields(newFields);
          }}
          label="Text Field"
          variant="outlined"
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
        ))}
        <Button onClick={handleAddThankfulField}>+ Main field</Button>
      </header>
      <Divider sx={{ bgcolor: "secondary.light" }} />

      <header>
        <h2>Thinking</h2>
        {thinkingFields.map((field, index) => (
          <Box key={index}>
            <TextField
                value={field.main}
                onChange={(e) => {
                const newFields = [...thinkingFields];
                newFields[index] = { ...newFields[index], main: e.target.value };
                setThinkingFields(newFields);
                }}
                label={`Main Thinking Field ${index + 1}`}                variant="outlined"
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
            {field.subs.map((sub, subIndex) => (
                <TextField
                    key={subIndex}
                    value={sub}
                    onChange={(e) => {
                        const newFields = [...thinkingFields];
                        newFields[index].subs[subIndex] = e.target.value;
                        setThinkingFields(newFields);
                    }}
                    label={`Sub Field ${subIndex + 1} of Main Field ${index + 1}`}
                    variant="outlined"
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
      ))}
            <Button onClick={() => handleAddSubField(index)}>+ Sub Field</Button>
          </Box>
        ))}
        <Button onClick={handleAddThinkingField}>+ Main Field</Button>
        <Divider sx={{ bgcolor: "secondary.light" }} />
        <br/>
        <Button onClick={downloadData}> Download Data</Button>
      </header>
      <img src={feelingWheelImage} alt="Feeling Wheel" />
    </div>
  );
};

export default JournalPage;
