import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Add, Remove } from '@mui/icons-material';
import { useState } from 'react';
import { Typography } from '@mui/material';


type ProductCardProps = {
  title: string;
}

const ProductCard = ({ title }: ProductCardProps) => {
  const theme = useTheme();
  const [quantity, setQuantity] = useState<number>(0);

  const reduceQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', border: "1px solid" }}>
      <ListItem
        key={title}
        disablePadding
      >
        <ListItemButton>
          <ListItemText id={title} primary={title} />
          <IconButton aria-label="decrement" onClick={reduceQuantity}>
            <Remove />
          </IconButton>
          <IconButton aria-label="increment" onClick={() => setQuantity(quantity + 1)}>
            <Add />
          </IconButton>
        </ListItemButton>
        <ListItemText>
          <Typography component="h3" variant='h4'>
            {quantity}
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default ProductCard;
