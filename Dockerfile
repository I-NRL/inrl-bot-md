FROM quay.io/inrlwabot/inrl:latest
RUN git clone https://github.com/inrl-official/inrl-bot-md /root/inrl
WORKDIR /root/inrl/
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
