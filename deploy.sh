#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Preparing to deploy Koech Labs Landing Page to Render...${NC}"

# Check if git is initialized
if [ ! -d .git ]; then
  echo -e "${YELLOW}Initializing git repository...${NC}"
  git init
  git add .
  git commit -m "Initial commit for Render deployment"
fi

# Create a Render account if you don't have one already
echo -e "${YELLOW}To deploy to Render:${NC}"
echo -e "1. Create a Render account at https://render.com if you don't have one"
echo -e "2. Push this repository to GitHub/GitLab"
echo -e "3. In the Render dashboard, click 'New' and select 'Static Site'"
echo -e "4. Connect your repository"
echo -e "5. Use the following settings:"
echo -e "   - Name: koech-labs-landing"
echo -e "   - Build Command: ${GREEN}(leave empty)${NC}"
echo -e "   - Publish Directory: ${GREEN}.${NC} (just a dot for root directory)"
echo -e "6. Click 'Create Static Site'"

echo -e "\n${YELLOW}Would you like to open the Render dashboard now? (y/n)${NC}"
read -r response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
  echo -e "${GREEN}Opening Render dashboard...${NC}"
  if command -v open &> /dev/null; then
    open "https://dashboard.render.com"
  elif command -v xdg-open &> /dev/null; then
    xdg-open "https://dashboard.render.com"
  elif command -v start &> /dev/null; then
    start "https://dashboard.render.com"
  else
    echo -e "${YELLOW}Please visit https://dashboard.render.com manually${NC}"
  fi
fi

echo -e "\n${GREEN}Deployment preparation complete!${NC}"
echo -e "Your site will be available at https://koech-labs-landing.onrender.com once deployed"
echo -e "You can also add a custom domain in the Render dashboard settings" 