FROM quay.io/inrlwabot/inrl:latest
RUN git clone https://github.com/shamilmyran/inrl-bot-md /root/shamilmyran
WORKDIR /root/shamilmyran/
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
